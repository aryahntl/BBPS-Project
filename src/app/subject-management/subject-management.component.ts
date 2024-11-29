import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css'],
})
export class SubjectManagementComponent {
  subjects = [
    { code: 'SUB001', name: 'Mathematics', displayName: 'Math' },
    { code: 'SUB002', name: 'Science', displayName: 'Sci' },
  ];
  newSubject = { code: '', name: '', displayName: '' };
  editingIndex: number | null = null;
  editSubject = { code: '', name: '', displayName: '' };

  // Add a new subject
  addSubject() {
    if (
      this.newSubject.code &&
      this.newSubject.name &&
      this.newSubject.displayName
    ) {
      this.subjects.push({ ...this.newSubject });
      this.newSubject = { code: '', name: '', displayName: '' };
    } else {
      alert('Please fill in all fields');
    }
  }

  // Toggle edit mode
  toggleEdit(index: number) {
    if (this.editingIndex === index) {
      this.editingIndex = null; // Cancel editing
    } else {
      this.editingIndex = index; // Enable editing
      this.editSubject = { ...this.subjects[index] }; // Copy subject details
    }
  }

  // Save edited subject
  saveEdit(index: number) {
    if (
      this.editSubject.code &&
      this.editSubject.name &&
      this.editSubject.displayName
    ) {
      this.subjects[index] = { ...this.editSubject }; // Save updated data
      this.editingIndex = null; // Exit edit mode
    } else {
      alert('Please fill in all fields');
    }
  }

  // Delete subject
  deleteSubject(index: number) {
    this.subjects.splice(index, 1);
    if (this.editingIndex === index) {
      this.editingIndex = null; // Cancel editing if the deleted row is being edited
    }
  }
}

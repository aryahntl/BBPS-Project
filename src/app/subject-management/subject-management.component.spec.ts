import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css'],
})
export class SubjectManagementComponent {
  // Flags for toggling views
  showTable: boolean = true;
  showForm: boolean = false;
  showPopup: boolean = false;

  // Subjects data
  subjects: any[] = [
    { code: 'SUB001', name: 'Mathematics', displayName: 'Math' },
    { code: 'SUB002', name: 'Science', displayName: 'Sci' },
  ];

  // New subject
  newSubject: any = { code: '', name: '', displayName: '' };

  // Editing subject
  editSubject: any = { code: '', name: '', displayName: '' };
  editIndex: number = -1;

  // Show View Subjects
  showViewSubjects() {
    this.showTable = true;
    this.showForm = false;
  }

  // Show Add New Subject
  showAddNewSubject() {
    this.showTable = false;
    this.showForm = true;
    this.newSubject = { code: '', name: '', displayName: '' };
  }

  // Save New Subject
  saveSubject() {
    if (this.newSubject.code && this.newSubject.name && this.newSubject.displayName) {
      this.subjects.push({ ...this.newSubject });
      alert('Subject added successfully!');
      this.showViewSubjects(); // Switch to table view
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Open Edit Popup
  openEditPopup(subject: any, index: number) {
    this.editSubject = { ...subject };
    this.editIndex = index;
    this.showPopup = true;
  }

  // Save Edited Subject
  saveEditedSubject() {
    if (this.editIndex > -1) {
      this.subjects[this.editIndex] = { ...this.editSubject };
      alert('Subject updated successfully!');
      this.closeEditPopup();
    }
  }

  // Close Edit Popup
  closeEditPopup() {
    this.showPopup = false;
    this.editIndex = -1;
  }

  // Delete Subject
  deleteSubject(index: number) {
    if (confirm(`Are you sure you want to delete ${this.subjects[index].name}?`)) {
      this.subjects.splice(index, 1);
    }
  }
}

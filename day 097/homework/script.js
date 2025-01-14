const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
  ];
  
  const filterSelect = document.getElementById('filter');
  const applyFilterButton = document.getElementById('applyFilter');
  const emailList = document.getElementById('emailList');
  const addEmailButton = document.getElementById('addEmail');
  const newSubjectInput = document.getElementById('newSubject');
  const newContentInput = document.getElementById('newContent');
  
  function showEmails(filter) {
    emailList.innerHTML = '';
    for (let i = 0; i < emails.length; i++) {
      if (!filter || emails[i].subject.startsWith(filter)) {
        const listItem = document.createElement('li');
        listItem.textContent = emails[i].subject + ": " + emails[i].content;
        emailList.appendChild(listItem);
      }
    }
  }
  
  applyFilterButton.addEventListener('click', function () {
    const selectedSubject = filterSelect.value;
    showEmails(selectedSubject);
  });
  
  addEmailButton.addEventListener('click', function () {
    const newSubject = newSubjectInput.value.trim();
    const newContent = newContentInput.value.trim();
  
    if (newSubject && newContent) {
      emails.push({ subject: newSubject, content: newContent});
  
      let exists = false;
      for (let i = 0; i < filterSelect.options.length; i++) {
        if (filterSelect.options[i].value === newSubject) {
          exists = true;
          break;
        }
      }
  
      if (!exists) {
        const newOption = document.createElement('option');
        newOption.value = newSubject;
        newOption.textContent = newSubject;
        filterSelect.appendChild(newOption);
      }
  
      newSubjectInput.value = '';
      newContentInput.value = '';
      showEmails();
    } 
    else {
      alert('ორივე შეიყვანე, subject-იც და content-იც.');
    }
  });
  
  showEmails();
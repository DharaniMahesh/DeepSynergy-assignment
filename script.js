

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var companyName = document.getElementById('companyName').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var likeTo = document.querySelector('.form-select').value;
    var hearAboutUs = document.getElementById('hearAboutUs').value;
    var additionalInfo = document.getElementById('additionalInfo').value;
    var formData = {
        'First Name': firstName,
        'Last Name': lastName,
        'Email': email,
        'Company Name': companyName,
        'Job Title': jobTitle,
        'I\'d Like To': likeTo,
        'How Did You Hear About Us': hearAboutUs,
        'Anything Else You\'d Like Us to Know': additionalInfo
      };
  
    console.log(JSON.stringify(formData));
});


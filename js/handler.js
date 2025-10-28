console.log('handler.js is loaded');

document.getElementById('btn-update-title').addEventListener('click', function(){
            //console.log('Update Title button clicked');
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = 'Title Updated Successfully';
        })


document.getElementById('btn-login')
        .addEventListener('click', function(){
            const userInfoEl = document.getElementById('user-info');
            userInfoEl.innerText = 'User: John Doe';
        })
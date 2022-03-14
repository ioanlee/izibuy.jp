document.addEventListener('DOMContentLoaded', function(){
    const changeLink = document.querySelector('#change-password-link')
    changeLink.addEventListener('click', () => {
        document.getElementById('remindPassPopup').style.display = 'block'   
    })
})


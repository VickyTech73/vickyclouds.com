window.onload = function(){

var howTo = document.querySelector('.howTo')
var prof = document.getElementById('changeProfilePicBtn')
var upload = document.getElementById('uploadFilesBtn')
var forget = document.getElementById('forgetPasswordBtn')
var download = document.getElementById('downloadFilesBtn')
var signOut = document.getElementById('signOutBtn')
var whatsapp = document.getElementById('whatsappBtn')
var blog = document.getElementById('blog')
var head = document.getElementById('head')

prof.onclick = function() {
    head.innerHTML = 'How to change profile picture'
    howTo.innerHTML = '1. Save the phone number of our AI, Victoria, +233 547714953 if you have not.<br><br>'+
    "2. Send 'change profile picture' to Victoria through Whatsapp.<br><br>"+
    "3. Send the picture you want to use as your profile picture to Victoria<br>"+
    "<b>Note:</b> Add your email adress and your Vicky Clouds password for verification by Victoria.<br><br>"+
    '4. Wait for verification and wheather or not, the change was successful.'
}

upload.onclick = function() {
    head.innerHTML = 'How to upload files'
    howTo.innerHTML = '1. Save the phone number of our AI, Victoria, +233 547714953 if you have not.<br><br>'+
    "2. Send the file(s) you want to uplaod to Victoria through Whatsapp.<br><br>"+
    "3. Add your email adress and your Vicky Clouds password for verification by Victoria.<br><br>"+
    '4. Wait for verification and wheather or not, the change was successful.'
}

forget.onclick = function() {
    head.innerHTML = 'How to reset password'
    howTo.innerHTML = '1. Visit Vicky Clouds.<br><br>'+
    "2. Click on the 'forget password' link.<br><br>"+
    '3. Fill the forms provided.'
}

download.onclick = function() {
    head.innerHTML = 'How to download files'
    howTo.innerHTML = '<u>For photos</u><br><br>'+
    "If you are using a mobile device, tap and hold the photo and then save the photo.<br><br>"+
    "And if you are using a laptop or a desktop, right click on the photo and save it.<br><br>"+
    '<u>For videos and music</u><br><br>'+
    '1. Click/tap on the three-dotted icon on the bottom right of the video.<br><br>'+
    "2. Select the download option to download the video.<br><br>"+
    "<u>For documents and apps</u><br><br>"+
    "Simply click/tap on the download button!"
}

signOut.onclick = function() {
    head.innerHTML = 'How to sign out'
    howTo.innerHTML = 'Sign outs are automatic!.<br>They are done when you exit from the site.'
}

blog.onclick = function() {
    head.innerHTML = 'Blog'
    howTo.innerHTML = 'From 11<sup>th</sup> of April 2023 to 2<sup>nd</sup> of June 2023, all services rendered by Vicky Clouds will be delayed until 5<sup>th</sup> of June 2023.'
}

whatsapp.onclick = function() {
    window.open('https://web.whatsapp.com')
}

}
// 'use strict';
// let notif = document.getElementById('numberNotification');
// let show_notification = document.getElementById("notification")
// let dataField = 0;
// class Toast  {
//     constructor(element) {
//         Object.defineProperty(this, 'element', {
//             get: function () {
//                 return element;
//             }
//         });
//         close()
//         function close() { 
//             let close = document.querySelectorAll (".toast");
//             let toast__close = document.getElementsByClassName("toast__close");
//             for (let i = 0; i < close.length; i++) {
//                 let button__close = toast__close[i];
//                 button__close.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     let target = event.target.dataset.person;
//                     localStorage.setItem("field", JSON.stringify(target));
//                     let getItem = JSON.parse(localStorage.getItem("field"));
//                     if(target == getItem) {
//                         close[i].remove()
//                         notif.innerHTML = show_notification.children.length;
//                     }
//                 });
//             }
//         }
//     }
//     show() {
//         let _this = this;
//         this.element.classList.add('toast_show');
//     }
//     hide() {
//         this.element.classList.remove('toast_show');
//     }
//     remove() {
//         this.element.remove();
//     }
//     static create(header, body, color) {
//         let fragment = document.createDocumentFragment(),
//         toast = document.createElement('div'), 
//         toastPreHeader = document.createElement('div'), 
//         toastData = document.createElement('div'), 
//         toastHeader = document.createElement('div'),
//         toastClose = document.createElement('button'), 
//         textSpoiler = document.createElement('p'),
//         toastBody = document.createElement('div');
//         toast.classList.add('toast');
//         toastHeader.classList.add('toast__header');
//         textSpoiler.setAttribute('id', 'contentSpoiler');
//         toastData.classList.add('toast__data');
//         toastPreHeader.classList.add('toast__preheader');
//         toastHeader.textContent = header;
//         toastClose.classList.add('toast__close');
//         toastClose.setAttribute('type', 'button');
//         toastClose.textContent = '×';
//         toastClose.dataset.person = "field" + dataField;
//         toastData.innerHTML = new Date().toLocaleDateString();
//         toastBody.appendChild(textSpoiler);
//         toastBody.classList.add('toast__body');
//         textSpoiler.textContent = body;
//         toastPreHeader.innerHTML = "&#10069;";
//         toastBody.appendChild(toastData);
//         toastHeader.appendChild(toastPreHeader);
//         toastHeader.appendChild(toastClose);
//         toast.appendChild(toastHeader);
//         toast.appendChild(toastBody);
//         fragment.appendChild(toast);
//         dataField ++

//         Spoiler()
//         function Spoiler(){ 
//             let ele = textSpoiler
//             let spoilerText = document.createElement('a')
//             let sp = document.createElement('p')
//             spoilerText.setAttribute('id', "linkSpoiler");
//             if(ele.textContent.length >= 70){
//                 spoilerText.innerHTML = "Показать";
//                 ele.classList.add('spoilerShow');
//                 sp.textContent = ele.textContent.slice(0, 60) + "..." + spoilerText;
//                 ele.after(spoilerText); 
//                 ele.after(sp)
//             }
//             spoilerText.addEventListener('click', function () {
//                 ele.innerHTML;
//                 console.log(ele);
//                 sp.classList.toggle('spoilerShow')
//                 ele.classList.toggle("spoilerShow")
    
//                 if (sp.className == 'spoilerShow' ) {
//                     spoilerText.innerHTML = "Скрыть"
//                 }
//                 else 
//                 spoilerText.innerHTML = "Показать"
//             })
//         }
//         return fragment;
//     } 
//     static add(params) {
//         let config = {
//             header: 'Название заголовка',
//             body: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст сообщения!',
//             color: '#ffffff'
//         };

//         if (params !== undefined) {
//             for (let item in params) {
//                 config[item] = params[item];
//                 console.log(params[item]);

//             }
//             console.log(config);
//         }
//         if (!document.querySelector('.toasts')) {
//             let container = document.createElement('div');
//             container.classList.add('toasts');
//             document.body.appendChild(container);
//         }
//         let createToast = document.querySelector('.notification').appendChild(Toast.create(config.header, config.body, config.color));
//         createToast.innerHTML
//         let toasts = document.querySelectorAll('.toast');
//         let toast = new Toast(toasts[toasts.length - 1]);
//         toast.show();
//         notif.innerHTML = show_notification.children.length;
//         return toast;
//     }
//     }
//     open_notification() 
//     function open_notification() { 
//     document.querySelector('#navs').addEventListener('click', function () { 
//         show_notification.classList.toggle('show_notification');
//         console.log(show_notification.childElementCount);
//     });
// }
// (function send() { 
//     for (var i = 0; i <5; i++) {
//         Toast.add()
//     }
// }());
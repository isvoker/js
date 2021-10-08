// 'use strict';
// let number = 0;
// let dataField = 0;
// let notif = document.getElementById('numberNotification');
// let show_notification = document.getElementById("notification")
// class Toast  {
// constructor(element, config) {
//     let
//         _this = this, _element = element, _config = {
//             autohide: true,
//             delay: 5000
//         };
//     for (let prop in config) {
//         _config[prop] = config[prop];
//     }
//     Object.defineProperty(this, 'element', {
//         get: function () {
//             return _element;
//         }
//     });
//     Object.defineProperty(this, 'config', {
//         get: function () {
//             return _config;
//         }
//     });    
// let close = document.querySelectorAll (".toast") 
// let qe = document.getElementsByClassName("toast__close")
// for (let i = 0; i < close.length; i++) {
//     let all_close = close[i];
//     let qew = qe[i]
//     qew.addEventListener('click', function (event) {
//         event.preventDefault();
//         let target = event.target.dataset.person;
//         localStorage.setItem("field", JSON.stringify(target));
//         let getItem = JSON.parse(localStorage.getItem("field"));

//         if(target == getItem) {
//             all_close.remove()
//             notif.innerHTML = show_notification.children.length;

//         }

//     });
// }
// }

// show() {
//     let _this = this;
//     this.element.classList.add('toast_show');
//     if (this.config.autohide) {
//         setTimeout(function () {
//             _this.hide();
//         }, this.config.delay);
//     }
// }
// hide() {
//     this.element.classList.remove('toast_show');
// }
// remove() {
//     this.element.remove();
// }
// static create(header, body, color) {
//     let fragment = document.createDocumentFragment(),
//     toast = document.createElement('div'), 
//     toastPreHeader = document.createElement('div'), 
//     toastData = document.createElement('div'), 
//     toastHeader = document.createElement('div'),
//     toastClose = document.createElement('button'), 
//     textSpoiler = document.createElement('p'),
//     toastBody = document.createElement('div');
//     toast.classList.add('toast');
//     toast.style.backgroundColor = 'rgba(' + parseInt(color.substr(1, 2), 16) + ',' + parseInt(color.substr(3, 2), 16) + ',' + parseInt(color.substr(5, 2), 16) + ',0.5)';
//     toastHeader.classList.add('toast__header');
//     textSpoiler.setAttribute('id', 'contentSpoiler');
//     // toastBody.setAttribute('id', 'spoilerText');
//     toastData.classList.add('toast__data');
//     toastPreHeader.classList.add('toast__preheader');
//     toastHeader.textContent = header;
//     toastClose.classList.add('toast__close');
//     toastClose.setAttribute('type', 'button');
//     toastClose.textContent = '×';
//     toastClose.dataset.person = "field" + dataField;
//     toastData.innerHTML = new Date().toLocaleDateString();
//     toastBody.appendChild(textSpoiler);
//     toastBody.classList.add('toast__body');
//     textSpoiler.textContent = body;
//     toastPreHeader.innerHTML = "&#10069;";
//     toastBody.appendChild(toastData);
//     toastHeader.appendChild(toastPreHeader);
//     toastHeader.appendChild(toastClose);
//     toast.appendChild(toastHeader);
//     toast.appendChild(toastBody);
//     fragment.appendChild(toast);
//     dataField ++
    
//     Spoiler()
//     function Spoiler(){ 
//         let ele = textSpoiler
//         let spoilerText = document.createElement('a')
//         let sp = document.createElement('p')
//         spoilerText.setAttribute('id', "linkSpoiler");
//         if(ele.textContent.length >= 70){
//             spoilerText.innerHTML = "Показать";
//             ele.classList.add('spoilerShow');
//             sp.textContent = ele.textContent.slice(0, 60) + "..." + spoilerText;
//             ele.after(spoilerText); 
//             ele.after(sp)
//         }
//         spoilerText.addEventListener('click', function () {
//             ele.innerHTML;
//             console.log(ele);
//             sp.classList.toggle('spoilerShow')
//             ele.classList.toggle("spoilerShow")

//             if (sp.className == 'spoilerShow' ) {
//                 spoilerText.innerHTML = "Скрыть"
//             }
//             else 
//             spoilerText.innerHTML = "Показать"
//         })
//     }
//     return fragment;
// } 

// static add(params) {
//     let config = {
//         header: 'Название заголовка',
//         body: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст сообщения!Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст сообщенияТекст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст сообщения',
//         color: '#ffffff',
//     };
//     if (params !== undefined) {
//         for (let item in params) {
//             config[item] = params[item];
//         }
//     }
//     if (!document.querySelector('.toasts')) {
//         let container = document.createElement('div');
//         container.classList.add('toasts');
//         document.body.appendChild(container);
//     }
//     // document.querySelector('.toasts').appendChild(Toast.create(config.header, config.body, config.color));
//     let createToast = document.querySelector('.notification').appendChild(Toast.create(config.header, config.body, config.color));
//     createToast.innerHTML
//     let toasts = document.querySelectorAll('.toast');
//     let toast = new Toast(toasts[toasts.length - 1], { autohide: config.autohide, delay: config.delay });
//     toast.show();
//     notif.innerHTML = show_notification.children.length;
//     return toast;
// }
// }
// document.querySelector('#navs').addEventListener('click', function () { 
//     show_notification.classList.toggle('show_notification');
//     console.log(show_notification.childElementCount);

// });
// // function Spoiler(){ 
// //     let ele = textSpoiler
// //     // let sp = document.getElementById('spoilerText')
// //     // let ele = document.getElementById("contentSpoiler");
// //     let spoilerText = document.createElement('a')
// //     let sp = document.createElement('p')
// //     spoilerText.setAttribute('id', "linkSpoiler");
// //     console.log(ele.textContent);
// //     if(ele.textContent.length >= 70){
// //         spoilerText.innerHTML = "Показать";
// //         ele.classList.add('spoilerShow');
// //         sp.textContent = ele.textContent.slice(0, 60) + "..." + spoilerText;
// //         ele.after(spoilerText); 
// //         ele.after(sp)
// //     }
// //     spoilerText.addEventListener('click', function () {
// //         ele.innerHTML;
// //         console.log(ele.textContent);
// //         console.log(ele);
// //         sp.classList.toggle('spoilerShow')
// //         ele.classList.toggle("spoilerShow")

// //         if (sp.className == 'spoilerShow' ) {
// //             spoilerText.innerHTML = "Скрыть"
// //         }
// //         else 
// //         spoilerText.innerHTML = "Показать"
// //     })
// // }
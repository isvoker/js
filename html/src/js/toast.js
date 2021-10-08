'use strict';
let numberNotification = document.getElementById('numberNotification');
let show_notification = document.getElementById("notification")
let dataField = 0;
class Toast  {
    constructor(element) {
        Object.defineProperty(this, 'element', {
            get: function () {
                return element;
            }
        });
        close()
        function close() { 
            let close = document.querySelectorAll (".toast");
            let toast__close = document.getElementsByClassName("toast__close");   
            for (let i = 0; i < close.length; i++) {
                let button__close = toast__close[i];
                button__close.addEventListener('click', function (event) {
                    event.preventDefault();

                    let target = event.target.dataset.person;
                    // localStorage.setItem('complite', JSON.stringify(target));
                    // // notifications.push(element);
                    // let getItem = JSON.parse(localStorage.getItem("complite"));
                    // console.log(getItem);

                    let notifications = JSON.parse(localStorage.getItem('item')) || [];
                    notifications.push(target);
                    localStorage.setItem('item', JSON.stringify(notifications));
                    console.log(notifications);

                    close[i].remove()
                    numberNotification.innerHTML = show_notification.children.length;
                    localStorage.removeItem('data-person')
                });
            }

        }
    }
    show() {
        let _this = this;
        this.element.classList.add('toast_show');
    }
    hide() {
        this.element.classList.remove('toast_show');
    }
    remove() {
        this.element.remove();
    }
    static create(header, body) {
        let fragment = document.createDocumentFragment(),
        toast = '<div class="toast"> ',
        toastHeader = '<div class="toast__header">',
        toastBody = '<div class="toast__body"> ',
        toastPreHeader ='<div class="toast__preheader"> &#10069;</div>',
        toastData = '<div class="toast__data"> ', 
        toastClose = '<button class="toast__close" tupe = "button" data-person="field'+ dataField +'">х</button>',
        textSpoiler =  '<p id="contentSpoiler"></p>';

        toastData += new Date().toLocaleDateString() + '</div>';
        textSpoiler = body;
        toastHeader += header +toastPreHeader + toastClose + '</div>';
        toastBody += textSpoiler + toastData + '</div>';
        toast += toastHeader + toastBody + '</div>';
        show_notification.innerHTML += toast;
        dataField ++

        // Spoiler()
        function Spoiler(){ 
            let ele = body
            let spoilerText = document.createElement('a')
            let sp = document.createElement('p')
            spoilerText.setAttribute('id', "linkSpoiler");
            if(ele.length >= 70){
                spoilerText.innerHTML = "Показать";
                ele.classList.add('spoilerShow');
                textSpoiler += 'class="spoilerShow"'
                sp.textContent = ele.textContent.slice(0, 60) + "..." + spoilerText;
                ele.after(spoilerText); 
                ele.after(sp)
            }
            spoilerText.addEventListener('click', function () {
                ele.innerHTML;
                console.log(ele);
                sp.classList.toggle('spoilerShow')
                ele.classList.toggle("spoilerShow")
                if (sp.className == 'spoilerShow' ) {
                    spoilerText.innerHTML = "Скрыть"
                }
                else 
                spoilerText.innerHTML = "Показать"
            })
        }
        return fragment;
    } 
    static add(params) {
        let config = {
            header: 'Название заголовка',
            body: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст сообщения!',
            color: '#ffffff'
        };

        if (params !== undefined) {
            for (let item in params) {
                config[item] = params[item];
            }
        }
        if (!document.querySelector('.toasts')) {
            let container = document.createElement('div');
            container.classList.add('toasts');
            document.body.appendChild(container);
        }
        let createToast = document.querySelector('.notification').appendChild(Toast.create(config.header, config.body, config.color));
        createToast.innerHTML
        let toasts = document.querySelectorAll('.toast');
        let toast = new Toast(toasts[toasts.length - 1]);
        // toast.show();
        numberNotification.innerHTML = show_notification.children.length;
        return toast;
    }
    }
    open_notification() 
    function open_notification() { 
    document.querySelector('#navs').addEventListener('click', function () { 
        show_notification.classList.toggle('show_notification');
        // console.log(show_notification.childElementCount);
    });  
}

(function () { 
    const requestURL = './js/notif.json';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);
    xhr.responseType = 'json';
    xhr.send();
    if (xhr.status != 200) {
    console.log(true); 
    } else {
    console.log(false);
    }
    xhr.onload = function () {
        console.log(xhr.response);
        let all = xhr.response;
        for (let i in all){
            let arr = all[i];
            arr.forEach((element) =>{
                Toast.add(element) 
            });
        }
    }
    
    let itemNumber = 0;
    const dataKey = JSON.parse(localStorage['item']);
    console.log(dataKey);
    dataKey.forEach(item => {
        console.log(item == 'field'+ itemNumber);
        console.log(item);
        itemNumber++;   
    })
  
    
    // let keys = Object.keys(localStorage);
    // for(let key of keys) {
    // let dataKey = `${key}: ${localStorage.getItem(key)}`;
    // console.log(dataKey);
    // }
}());
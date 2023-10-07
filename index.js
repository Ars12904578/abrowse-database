const firebaseConfig = {
        apiKey: "AIzaSyBGUrn_z-QDeuAT3LKD1rbtTB56p2Xyo-4",
        authDomain: "abrowse-search-db.firebaseapp.com",
        databaseURL: "https://abrowse-search-db-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "abrowse-search-db",
        storageBucket: "abrowse-search-db.appspot.com",
        messagingSenderId: "837506355640",
        appId: "1:837506355640:web:32ac036a34e1acd1d47f4d",
        measurementId: "G-P6Q07MEQ3X"};
        firebase.initializeApp(firebaseConfig);
        setInterval(() => {
            firebase.database().ref("db/url").on('value', function (snapshot){sessionStorage.setItem("dburl", "https://"+snapshot.val()+"-103-144-156-143.ngrok-free.app");})
        }, 1000);
        document.querySelector(".log").innerHTML = ">";
        var log_style = document.createElement("style");
        log_style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
.log{
    background-color: black;
    color: white;
    font-family: Silkscreen;
    font-size: 10px;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    bottom: 4px;
    left: 4px;
}
.logd{
    background-color: black;
    color: white;
    font-family: Silkscreen;
    padding: 2px 8px;
    border-radius: 4px;
}`;
        document.body.appendChild(log_style)
        const database_server_url = sessionStorage.getItem("dburl");
        function command(message) {
          const element = document.querySelector(".log");
          const speed = 50; 
          let i = 0;
          const typeWriter = () => {
            if (i < message.length) {
              element.innerHTML += message.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          };
        
          setTimeout(() => {
            element.innerHTML = "> ";
            typeWriter();
          }, 1000);
        }
        function command_noT(message) {
          document.querySelector(".log").innerHTML = "> "+ message;
        }
        if(sessionStorage.getItem("rel") == "" || sessionStorage.getItem("rel") == null){
            sessionStorage.setItem("rel", "1")
            command_noT("Loading")
            setTimeout(() => {
            window.location.reload();
            }, 1000);
        }
        else if(sessionStorage.getItem("rel") == "1"){
            sessionStorage.setItem("rel", "2")
            command_noT("Loading")
            setTimeout(() => {
            window.location.reload();
            }, 1500);
        }
        else if(sessionStorage.getItem("rel") == "2"){
            sessionStorage.setItem("rel", "3")
            command_noT("Loading")
            setTimeout(() => {
            window.location.reload();
            }, 2000);
        }else{
          command_noT("Task Done")
        }


        function getRequest(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                callback(xhr.responseText);
              }
            }
          };
          xhr.open("GET", url);
          xhr.setRequestHeader('ngrok-skip-browser-warning', 'true');
          xhr.send();
        }
        
        function setup() {
          getRequest(`${database_server_url}/blocker`, function (data) {
            var parsedData = JSON.parse(data.replace(/\\n/g, ''));
            sessionStorage.setItem("host", JSON.stringify(parsedData));
          });
        }
        
        setup();
        setTimeout(setup, 500);
        
    
const host = {hostnames: sessionStorage.getItem("host")};
if (sessionStorage.getItem("host") != "" || sessionStorage.getItem("host") != null){
    if (host.hostnames.includes(window.location.hostname)) {
        console.log("host allowed");
        
          setTimeout(() => {
            command("host allowed")
          }, 100);
        
        function delete_data(id) {
            const formData = new FormData();
            formData.append('delete', id);
            formData.append('web', window.location.hostname);
            const url = `${database_server_url}/?` + new URLSearchParams(formData).toString();
            const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('ngrok-skip-browser-warning', 'true');
        xhr.send();}
        
        function write_data(name) {
            const formData = new FormData();
            formData.append('web', window.location.hostname);
            formData.append('name', name);
            const url = `${database_server_url}/?` + new URLSearchParams(formData).toString();
            const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('ngrok-skip-browser-warning', 'true');
        xhr.send();}
        
        function edit_data(id, name) {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('web', window.location.hostname);
            formData.append('name', name);
            const url = `${database_server_url}/edit?` + new URLSearchParams(formData).toString();
            const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader('ngrok-skip-browser-warning', 'true');
        xhr.send();}
        
        function get_data(id, element) {
          var xhr3 = new XMLHttpRequest(); xhr3.open('GET', database_server_url + '/send/' + id);
            xhr3.setRequestHeader('ngrok-skip-browser-warning', 'true'); xhr3.send();
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {const data = xhr.responseText;
            document.querySelector(`${element}`).innerHTML = data;};
            xhr.open("GET", `${database_server_url}/send/${id}`, true);
            xhr.setRequestHeader('ngrok-skip-browser-warning', 'true'); xhr.send();}
    }
    else{console.log("host blocked")
      setTimeout(() => {
        command("host blocked")
      },2100);
  }
}
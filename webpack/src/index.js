import "./sass/style.scss";
// import "./css/style.css";
// import "./css/base.css";
// import vova from './js/vova';
import "./templating/test.handlebars";

window.addEventListener("load", () => {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");


    class User {
        #status

        constructor(status) {
            this.#status = status
        }
        getInfo() {
            console.log(this.#status);
        }
    }

    const sara = new User("Moderator");
    sara.getInfo();
})
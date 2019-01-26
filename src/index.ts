// src/index.ts
import Vue from "vue";
import HelloComponent from "./components/Hello";

let v = new Vue({
    el: "#app",
    data: {
        name: "World"
    }
});

let v1 = new Vue({
    el: "#app1",

    data: { name: "World22" },
    components: {
        HelloComponent
    }
});
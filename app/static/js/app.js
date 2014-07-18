$(function () {
  //Vue.config({prefix: 'data'});
  Todo = new Vue({
    el: "#list",
    data: {
      list: [],
      input: "hoge"
    },
    created: function () {
      this.add('item1');
      this.add('item2');
      this.add('item3');
    },
    methods: {
      addItem: function (e) {
        e.preventDefault();
        if(this.input){
          this.add(this.input);
          this.input = "";
        }
      },
      add: function (text) {
        this.list.push({
          text: text,
          complete: false
        });
      },
      removeChecked: function () {
        $(Todo.list).each(function () {
          if(this.complete){
            Todo.remove(this.text);
          }
        }); 
      },
      remove: function (text) {
        var removed;
        var list = $.grep(Todo.list, function (val) {
          if(val.text != text){
            return val;
          }else{
            removed = val;
          }
        });
        Todo.list = list;
      }
    }
  });

});

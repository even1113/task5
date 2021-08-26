//改变按钮的颜色
var b = document.getElementById('bbb');
    b.onmouseover = function(){
         b.style.backgroundColor = '#cd4f35';
    }
    b.onmouseout = function(){
         b.style.backgroundColor = '#f38c78';
    }

    //改变搜索框内的样式
    var text = document.getElementById('input-search');
    text.onfocus = function(){
        if(this.value === '别玩了懒狗'){
            this.value = '';
            this.style.color = 'black';
        };
    }
    text.onblur = function(){
        if(this.value === ''){
            this.value = '别玩了懒狗';
            this.style.color = '#ccc';
        };
        
    }




<body>
    <h1></h1>
    <hr>
    <p1></p1>
	<div id="p2" class="">
	</div>
    <script type="text/javascript">
        var authorExtend = Vue.extend({
            template:"<p><a :href='website'>{{university}}</a></p>",
            data:function(){
                return{
                    university:'zzu',
                    websit:'http://www.zzu.edu.cn'
                }
            }
        });   
       new authorExtend().$mount('p1');
	   new authorExtend().$mount("#p2");
    </script>
</body>

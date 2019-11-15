<template>
  <div id="selector" class="redLabel">

  </div>
</template>

<script>
// import $ from 'jquery'
// import gantt from 'jquery.gantt/dist/jquery-gantt'
export default {
  mounted(){
    // console.log(gantt);
    function addTag(){
            var  spacer = $(".spacer");
            var html = "";
            html += '<span>机组名称</span>'+
                    '<span>计划分类</span>';
            spacer.html(html);   
            $(".nav-zoomIn").hide();//影藏放大
            $(".nav-zoomOut").hide();//影藏缩写
            /**
             * 解决样式错乱
             */
            $(".row .date:last-child").css("float","right");
            $(".row .date:last-child").css("margin-top","-24px");
            $(".row .day:last-child").css("float","right");
            $(".row .day:last-child").css("margin-top","-24px");
            /*$(".year:first").hide(); //默认影藏
            $(".month:first").hide();
            $(".row .date:nth-child(1)").hide();
            $(".row .date:nth-child(2)").hide();
            $(".row .day:nth-child(1)").hide();
            $(".row .day:nth-child(2)").hide();*/
            /*$(".year:first").remove();
            $(".month:first").remove();
            $(".row .date:nth-child(1)").remove();
            $(".row .date:nth-child(2)").remove();
            $(".row .day:nth-child(1)").remove();*/
        }
        /**
         * 时间转换成数字
         */
        var date = new Date('2018-02-11');
        function daysBetween(sDate1){
            var time1 = Date.parse(sDate1);
            return time1;
        };
    var source = [{
            name: "北仑厂2号机",
            desc: "AVC",
            values: [{ //一行显示
                id: "t01",
                /*from: "1514851200000",
                to: "1515369600000",*/
                from: daysBetween(new Date('2018-01-01')),
                to: daysBetween(new Date('2018-01-06')),
                desc:'2018-01-01到2018-01-06',
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttRed",
            },
            {
                id: "t01",
                /*from: "1514851200000",
                to: "1515369600000",*/
                from: daysBetween(new Date('2018-01-07')),
                to: daysBetween(new Date('2018-01-19')),
                desc:'2018-01-01到2018-01-06',
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttRed",
            }]
        },{
            name: "北仑厂4号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-01-06')),
                to: daysBetween(new Date('2018-02-06')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttBlue",
                dep: "t02",
            }]
        },{
            name: "北仑厂5号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-02-02')),
                to: daysBetween(new Date('2018-04-06')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttGreen"
            }]
        },{
            name: "北仑厂6号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-03-02')),
                to: daysBetween(new Date('2018-04-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttBlue"
            }]
        },{
            name: "北仑厂2号机",
            desc: "AVC",
            values: [{
                id: "t01",
                from: daysBetween(new Date('2018-06-02')),
                to: daysBetween(new Date('2018-12-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06',  
                customClass: "ganttGreen",
                dep: "t02"
            }]
        },{
            name: "北仑厂8号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-07-02')),
                to: daysBetween(new Date('2018-8-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttOrange"
            }]
        },{
            name: "北仑厂9号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-09-02')),
                to: daysBetween(new Date('2018-11-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttBlue"
            }]
        },{
            name: "北仑厂9号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-09-02')),
                to: daysBetween(new Date('2018-11-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttBlue"
            }]
        },{

            name: "北仑厂9号机",
            desc: "AVC",
            values: [{
                from: daysBetween(new Date('2018-09-02')),
                to: daysBetween(new Date('2018-11-21')),
                desc:'2018-01-01到2018-01-06' ,
                label: '2018-01-01到2018-01-06', 
                customClass: "ganttBlue"
            }]
        }]
    this.$nextTick(()=>{
      console.log(source);
      
      $(".redLabel").gantt({
            source:source ,
            navigate: "scroll",
            navigate: 'scroll', //buttons  scroll
            scale: "days", // months  weeks days  hours
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dow: ["S", "M", "T", "W", "T", "F", "S"],
            maxScale: "months",
            minScale: "days",
            itemsPerPage: 10,
            onItemClick: function(data) {
                //alert("Item clicked - show some details");
            },
            onAddClick: function(dt, rowId) {
                //alert("Empty space clicked - add an item!");
            },
            onRender: function() {
                if (window.console && typeof console.log === "function") {
                    console.log("chart rendered");
                    addTag();
                }
            }
        });
    })
  }
}
</script>

<style>

</style>
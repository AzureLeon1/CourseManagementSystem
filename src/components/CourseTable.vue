<template>
  <div>
    <div class="nav">
      <select v-model="selectWeek">
        <option v-for="index in 25" :value="index" :key='index'>第{{ index }}周</option>
      </select>
    </div>
    <div class="header">
      <div :class="['card',{'select-card': dayFlag[index]}]" v-html="value"
      v-for="(value,key,index) in dayName" :key='index'></div>
    </div>
    <div class="content">
      <div :class="['card','day-'+lesson.day,'class-'+lesson.class,'length-'+lesson.length]"
      :style="{'background-color':colorList[(lesson.name.length)%9]}"
      v-for="lesson in lessonFilter" :key='lesson.id'>
        <router-link :to="{name: 'lesson-info', query:{lessonId:lesson.id}}" tag='span'>
          {{lesson.name+'@'+lesson.room}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name :'CourseTable',
  data () {
    return {
      theWeek: '1', // 当前周
      selectWeek: '1', // 要查看的周
      dayName: {
        mon: '星期一', tue: '星期二', wed: '星期三', thu: '星期四', fri: '星期五', sat: '星期六', sun: '星期日'
      },
      dayFlag: [// 周一到周日，当前日的值为true
        false, false, false, false, false, false, false
      ],
      colorList: [
        '#E03636', '#e4622c', '#1874ad', '#36e066', '#FF534D',
        '#25C6FC', '#FC275C', '#FCC727', '#524DFF'
      ],
      lessonData: [ {"id": "0", "name": "第二外语（日语）", "room": "研713", "day": 2, "class": 1, "length": 2, "teacher": "西西木", "start": 1, "end": 16},
    {"id": "1", "name": "计算科学与数值方法", "room": "研701阶", "day": 3, "class": 1, "length": 2, "teacher": "算数数", "start": 1, "end": 16},
    {"id": "2", "name": "计算科学与数值方法", "room": "研1213", "day": 5, "class": 3, "length": 2, "teacher": "算数数", "start": 8, "end": 15},
    {"id": "3", "name": "毛泽东思想和中国科学社会主义理论体系概论", "room": "研201阶", "day": 2, "class": 3, "length": 2, "teacher": "张冰冰", "start": 1, "end": 16},
    {"id": "4", "name": "毛泽东思想和中国科学社会主义理论体系概论", "room": "研1101阶", "day": 4, "class": 5, "length": 2, "teacher": "张冰冰", "start": 1, "end": 16},
    {"id": "5", "name": "操作系统", "room": "研1101阶", "day": 3, "class": 3, "length": 2, "teacher": "陈思思", "start": 1, "end": 16},
    {"id": "6", "name": "操作系统", "room": "研1213", "day": 4, "class": 3, "length": 2, "teacher": "陈思思", "start": 14, "end": 16, "oddOrDual": false},
    {"id": "7", "name": "操作系统", "room": "研1213", "day": 5, "class": 5, "length": 2, "teacher": "陈思思", "start": 5, "end": 15, "oddOrDual": true},
    {"id": "8", "name": "操作系统", "room": "研201阶", "day": 5, "class": 5, "length": 2, "teacher": "陈思思", "start": 2, "end": 16, "oddOrDual": false},
    {"id": "9", "name": "Java语言程序设计", "room": "研713", "day": 4, "class": 3, "length": 2, "teacher": "从岗岗", "start": 1, "end": 15, "oddOrDual": true},
    {"id": "10", "name": "Java语言程序设计", "room": "研1213", "day": 5, "class": 3, "length": 2, "teacher": "从岗岗", "start": 2, "end": 7},
    {"id": "11", "name": "Java语言程序设计", "room": "研1213", "day": 5, "class": 3, "length": 2, "teacher": "从岗岗", "start": 16, "end": 16},
    {"id": "12", "name": "Java语言程序设计", "room": "研1213", "day": 1, "class": 5, "length": 2, "teacher": "从岗岗", "start": 16, "end": 16},
    {"id": "13", "name": "Java语言程序设计", "room": "研601阶", "day": 2, "class": 5, "length": 2, "teacher": "从岗岗", "start": 1, "end": 16},
    {"id": "14", "name": "Java语言程序设计", "room": "研1213", "day": 1, "class": 9, "length": 2, "teacher": "从岗岗", "start": 8, "end": 15},
    {"id": "15", "name": "计算机网络", "room": "研1213", "day": 1, "class": 5, "length": 2, "teacher": "高成成", "start": 8, "end": 15},
    {"id": "16", "name": "计算机网络", "room": "研601阶", "day": 1, "class": 7, "length": 2, "teacher": "高成成", "start": 1, "end": 16},
    {"id": "17", "name": "计算机网络", "room": "研701阶", "day": 2, "class": 7, "length": 2, "teacher": "高成成", "start": 2, "end": 16, "oddOrDual": false},
    {"id": "18", "name": "计算机组成原理", "room": "研1101阶", "day": 2, "class": 7, "length": 2, "teacher": "张彩彩", "start": 1, "end": 15, "oddOrDual": true},
    {"id": "19", "name": "计算机组成原理", "room": "研201阶", "day": 5, "class": 7, "length": 2, "teacher": "张彩彩", "start": 1, "end": 16},
    {"id": "20", "name": "计算机组成原理", "room": "东3教808", "day": 3, "class": 9, "length": 2, "teacher": "李津津", "start": 9, "end": 16},
    {"id": "21", "name": "Internet技术与应用", "room": "研213", "day": 4, "class": 7, "length": 2, "teacher": "陈思思", "start": 1, "end": 16},
    {"id": "22", "name": "Internet技术与应用", "room": "研1213", "day": 1, "class": 11, "length": 2, "teacher": "陈思思", "start": 8, "end": 15},
    {"id": "23", "name": "形势与政策", "room": "研201阶", "day": 1, "class": 9, "length": 2, "teacher": "温媛媛", "start": 1, "end": 3}]
    }
  },
  methods: {
    initHeader: function () {
      var now = new Date()
      var sub = this.selectWeek - this.theWeek
      if (sub !== 0) {
        now.setDate(now.getDate() + (sub * 7))
      }
      var month = now.getMonth() + 1
      var day = now.getDate()
      var week = now.getDay()

      week = parseInt(week)
      if (week === 0) {
        week = 7
      }
      week--// 把周一到周日（1……6,0)转换成(0……6)

      // 把当天置为选中状态
      this.dayFlag[week] = true

      var firstDay = day - week

      var flag = true

      for (let key in this.dayName) {
        let arr = this.dayName[key].split('<br/>')
        if (arr.length > 1) {
          this.dayName[key] = arr[arr.length - 1]
        }
        if (firstDay <= 0) {
          let tmp = new Date(now.valueOf())
          tmp.setDate(firstDay)
          this.dayName[key] = `${tmp.getDate()}<br/>${this.dayName[key]}`
        } else if (firstDay === 1) {
          this.dayName[key] = `${month}月<br/>${this.dayName[key]}`
          flag = !flag
        } else {
          this.dayName[key] = `${firstDay}<br/>${this.dayName[key]}`
        }
        firstDay++
      }
      if (flag) {
        this.dayName.mon = month + '/' + this.dayName.mon
      }
    }
  },
  watch: {
    'selectWeek': function (newval) {
      this.initHeader()
    }
  },
  computed: {
    lessonFilter: function () {
      var newList = []
      this.lessonData.forEach(item => {
        if (item.start <= this.selectWeek && item.end >= this.selectWeek) { // 如果在选中周
          if (typeof (item.oddOrDual) === 'undefined') { // 如果单双周没有定义
            newList.push(item)
          } else if (this.selectWeek % 2 === (item.oddOrDual ? 1 : 0)) { // 单周时，oddOrDual为true，true==1；双周时，oddOrDual为false，false=0。
            newList.push(item)
          }
        }
      })
      return newList
    }
  },
//   created () {
//     this.$api.get('setting', r => {
//       this.theWeek = r.week
//       this.selectWeek = r.week
//     })
//     this.$api.get('lessons', r => {
//       this.$store.commit('init', r)
//       this.lessonData = this.$store.getters.getList
//     })
//   }
}
</script>
<style lang="scss" scoped>
@function torem($px) {
  @return $px / 49px * 1rem;
}
@mixin fz($font-size) {
  font-size: $font-size;
  [data-dpr="2"] & {
      font-size: $font-size * 2;
  }
  [data-dpr="3"] & {
      font-size: $font-size * 3;
  }
}
$pc-min-width:768px;
$app-width:torem(490px);
$nav-bg:#2d2d2d;
$nav-height:torem(44px) !default;

//切换动画
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all .0.5s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  left:0;right: 0;
  transform: translateX(100%);
  opacity: 1;
}
html {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #fff;
	margin: 0;
	line-height: 1.33333;
}
#app{
  width: $app-width;
	background: rgba(255, 255, 255, 0.9);
	position: relative;
}
.nav{
	width:$app-width;
	background-color: $nav-bg;
	color:#fff;
	height: $nav-height;
	position: fixed;
	top: 0;
	z-index: 999;
	display:flex;
	justify-content: center;
	select{
		background-color:$nav-bg;
		color:#fff;
		border:none;
		&:focus{
			outline:none;
		}
		font-weight: 500;
		@include fz(14px);
	}
}

.header{
	padding: {
		top: $nav-height + torem(5px);
		bottom: torem(5px);
	}
	display: flex;
	justify-content: space-around;
	align-items: stretch;
	height: $nav-height;
	line-height: 1;
}
.content{
	position: relative;
	box-sizing: border-box;
	height: torem(780px);
	padding: 20px;
}
@media only screen and (min-width:$pc-min-width){
  body {
    background: url('/static/image/bg.jpg') no-repeat;
    background-size:cover;
  }
	#app {
    margin: {
			left: auto;
			right: auto;
    }
    box-shadow: rgba(250, 168, 168, 0.1) 0px 0px 0.1rem, 
                rgb(255, 255, 255) 0px 0px 0.4rem;
	}
	$nav-height:torem(32px);
	.nav,.header{
		height: $nav-height;
	}
	.header{
		padding-top: $nav-height + torem(5px);
		line-height: 1.33333;
	}
	.nav{
		select, span{
			@include fz(16px);
		}
	}
}

.card{
	text-align: center;
	width:torem(60px);
	opacity: 0.6;
	color: #fff;
	display: flex;
	justify-content: center;
	.header &{
		border-radius: torem(3px);
		opacity: 1;
		background-color: #2d2d2d;
		align-items: center;
	}
	.content &{
		border-radius: torem(5px);
		position: absolute;
		align-items: flex-start;
		padding:1%;
		box-sizing: border-box;
		span{
			overflow: hidden;
		}
	}
}
.select-card{
	.header &{
		background-color: #1e1e1e;
	}
}
@for $i from 1 through 4{
	.length-#{$i}{
		height: (torem(60px) * $i) + (torem(5px) * ($i - 1));
	}
}
@for $i from 1 through 12{
	.class-#{$i}{
		top: ($i - 1) * torem(65px);
	}
}
@for $i from 1 through 7{
	.day-#{$i}{
		left: ($i - 1) * torem(70px) + torem(5px);
	}
}
@media only screen and (min-width:$pc-min-width){
	$nav-height:torem(32px);
	.content .card{
		@include fz(14px);
	}
}

</style>

<template>
      <div class="info-container">
          
          <div class="classinfo" ref="classInfo">

              <div class="right">
                <div class="sticky">
                    <el-row>
                      <el-col :span="16">
                          <div> <Avatar :size="200" :src="the_class.avatar" />    
                          <div>{{the_class.name}}</div>
                        <el-rate
                            v-model="star"
                            disabled>
                        </el-rate></div>
                      </el-col>
                      <el-col :span="8">
                            <div class="desc">
                     
                      
                        <template>
                            <el-button class="status_btn" size="primary" style="font-weight: 300; " v-if="joinStatus === 0" @click="join">申请加入</el-button>
                            <el-button class="status_btn" size="primary" style="font-weight: 300; " v-if="joinStatus === 1" disabled>待审核</el-button>
                            <el-button class="status_btn" size="primary" style="font-weight: 300; " v-if="joinStatus === 2" disabled>已加入</el-button>
                        </template>

                    </div>
                      </el-col>
                    </el-row>
                   
                  

                    <div class="info">
                        <div class="title">班级简介</div>
                        <div>{{the_class.content}}</div>
                    </div>
                </div>
            </div>

          </div>
      </div>
</template>
<script>
import Avatar from '@/components/Avatar'
export default {
    name: 'ClassInfo',
    components: {
        Avatar
    },
    props: [],
    data(){
        return {
            foldInfo: true,
            current: 1,
            pageSize: 10,
            star: 0

        }
    },

    computed: {
        joinStatus(){
            return this.$store.state.classinfo.joinStatus

        },

        the_class(){
            return this.$store.state.classinfo.classinfo
        }

    },

    methods: {
        join() {
            this.$store.dispatch('classinfo/join', this.$route.params)
        }

    },

    mounted() {
        this.$store.dispatch('classinfo/getClassInfo', this.$route.params)
        this.$store.dispatch('classinfo/getJoinStatus', this.$route.params)


    

      
    },
    
}

</script>

<style>
.el-rate__icon {
    font-size: 15px;
    margin-right: 3px;
}
.el-carousel__container {
    position: relative;
    height: 265px;
}
</style>


<style lang="scss" scoped>
.info-container {
    width: 100%;
    max-width: 800px;
    margin: auto;
}
.poster {
    width: 40%;
    max-height: 80vh;
    margin: 25px 0 0;
    border-radius: 4px;
    position: sticky;
    z-index: -1;
}
.classinfo {
    display: flex;
    padding: 10px 0;
    background: white;
}
.left {
    flex: 2;
    margin-right: 20px;
    position: relative;

    .el-input, .el-card {
        margin: 15px 0;
    }

    .title {
        position: relative;
        display: inline-block;
        font-size: 14px;
        font-weight: 300;
        transform: translate3d(0, 50%, 0);
        background: white;
        padding: 0 10px;
        left: 6px;
    }
}
.status_btn {
    margin-top: 180px;
    width: 180px;
    height: 60px;
    margin-right: 60px;
}
.right {
    flex: 1;
     text-align: center;
    padding-top: 18px;
    .desc {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 1px;
        margin: 10px 0;
        line-height: 1.5;
    }


    .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        padding: 20px 10px;
        position: relative;
        margin-top: 50px;
        font-weight: 300;
        word-break: break-word;
    }
    .follow-info {
        text-align: left;
        margin-top: 20px;
    }
    .title {
        position: absolute;
        display: inline-block;
        font-size: 14px;
        font-weight: 300;
        left: 50%;
        top: -18px;
        transform: translate3d(-50%, 50%, 0);
        background: white;
        padding: 0 15px;
    }
    .btns {
        display: flex;
        .el-button {
            flex: 1;
            border-width: 1px 0 0 0;
        }
        .fold {
            border-radius: 0 0 0 4px;
        }
        .edit {
            border-radius: 0 0 4px 0;
            margin: 0;
        }
    }
}
.sticky {
    position: sticky;
    top: 25px;
}
.clubs {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 20px 15px 15px;
  }
.club {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 10px;
}
.club.unaudit .avatar {
    opacity: .5;
}

.send-twitter {
    margin: 40px 0px 20px;
}
.el-pagination {
    text-align: center;
}
.btn-unfold {
    width: 100%;
    border: 0;
    padding: 8px 0;
}
.el-rate {
    margin: 20px 0 24px;
}

.list-complete-item {
  transition: all .3s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
  opacity: 0;
    width: 100%;
    box-sizing: border-box;
}

.attrs {
    font-weight: 300;
    flex: 1;
    align-self: flex-end;
    .attr {
        line-height: 1.6;
        display: flex;
        font-size: 15px;
        line-height: 1.2;
        margin: 8px 0 0;

        .key {
            width: 1.5em;
            flex-shrink: 0;
            color: #c0c4cc;
        }
        .value {
            color: #606266;
        }
    }
}
.content {
    flex: 2;
    align-self: flex-start;
    margin: 10px;

    h2 {
        font-weight: 400
    }
    p {
        font-weight: 300
    }
}
</style>

<template>
    <div class="MessageCreate" :display="display">
        <div style="display: flex; flex-direction: column; align-items: center; ">
            <el-container class="wrapper">
                <el-header style="padding: 20px; font-size: 14px; color: #888; vertical-align: middle;">
                    <span style="vertical-align: middle; padding: 5px;">创建广播</span>
                    <button type="button" aria-label="Close" class="el-dialog__headerbtn" style="float: right;position: relative;top: 0;right: 0;" @click="close">
                        <i class="el-dialog__close el-icon el-icon-close"></i>
                    </button>
                </el-header>
                <el-main>
                    <div style="width: 800px; padding: 0 10px; display: flex; flex-direction: column;">
                        <el-form label-position="left" label-width="80px">
                            <el-form-item label="内容">
                                <el-input></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-main>
                <el-footer>
                </el-footer>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageCreate',
    props:{
        //set visibility
        display:{
            default: "block"
        }

    }
}
</script>

<style scoped>
    .MessageCreate{
        position: absolute;
        top: 50%;
        width: 100%;
    }
    
    .wrapper{
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style>
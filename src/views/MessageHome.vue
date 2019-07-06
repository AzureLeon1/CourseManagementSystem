<template>
    <div class="MessageHome">
        <div class="messageMenu">
            <span style="display: inline-block; width: 60%; text-align: center;">消息</span>
            <span style="display: inline-block; width: 20%; text-align: center;">来自</span>
            <span style="display: inline-block; width: 20%; text-align: center;">时间</span>
        </div>
        <div class="messageWrapper">
            part2-message short cut
            <MessageShortcut />
        </div>
    </div>
</template>

<script>
import MessageShortcut from '@/components/MessageShortcut';
export default {
    name: 'MessageHome',
    components: {
        MessageShortcut
    }
}
</script>

<style scoped>
    *{
        font-size: inherit;
    }

    /* MessageHome相当于page */
    .MessageHome{
        margin: 0 auto;
        border-radius: 5px;
        width: 60%;
        
        display: flex;
        flex-direction: column;
    }

    .messageMenu{
        height: 10px;
        color: #8d8d8d;
        font-size: 6px;
        width: 100%;
    }
    
    .messageWrapper{
        width: 100%;
        }
</style>
<template>
    <el-container class="coursewarehome">
        <el-aside width="260px">
            <user-nav :activeIndex="0"></user-nav>
        </el-aside>
        <el-main>
            <CoursewareList></CoursewareList>
        </el-main>
    </el-container>
</template>

<script>
import UserNav from "../components/UserNav"
import CoursewareList from "../components/CoursewareList"
export default {
    name:'Courseware',
    components: {
        CoursewareList,
        UserNav

    }
}
</script>


<template>
    <el-container class="coursewarehome">
        <el-aside width="260px">
            <class-nav :activeIndex="2"></class-nav>
        </el-aside>
        <el-main>
            <CoursewareList></CoursewareList>
        </el-main>
    </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import CoursewareList from "../components/CoursewareList"
export default {
    name:'Courseware',
    components: {
        CoursewareList,
        ClassNav

    }
}
</script>


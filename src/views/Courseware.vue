<template>
    <el-container class="coursewarehome">
        <el-aside width="238px">
            <class-nav :activeIndex="2"></class-nav>
        </el-aside>
        <el-main style="padding: 20px 15% 0 15%;">
            <Header></Header>
            <CoursewareList></CoursewareList>
        </el-main>
    </el-container>
</template>

<script>
import ClassNav from "../components/ClassNav"
import Header from "../components/Header"
import CoursewareList from "../components/CoursewareList"
export default {
    name:'Courseware',
    components: {
        CoursewareList,
        ClassNav,
        Header
    }
}
</script>


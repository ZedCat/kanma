<!--  -->
<template>
  <van-list>
    <van-row type="flex" justify="space-around">
      <van-col>
        <van-image
          fit="cover"
          width="150"
          height="150"
          lazy-load
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p>
          <van-tag round type="primary">你是一个大傻逼</van-tag>
          <van-tag round type="primary">标签</van-tag>
        </p>
      </van-col>
      <van-col>
        <van-image
          fit="cover"
          width="150"
          height="150"
          lazy-load
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
    </van-row>
  </van-list>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import requset from '@/utils/request.js'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      list: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 请求首页数据
    async getHomeList () {
      const { data: res } = await requset.get('index')
      this.list = res
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.getHomeList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>

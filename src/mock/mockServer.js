/**
 * Created by zhangxu on 2017/8/11.
 */
import Mock from "mockjs";
import data from "./data.json";
//注册接口
Mock.mock("/category",{
  code:0,
  data:data.category
});
Mock.mock("/homePage",{
  code:0,
  data:data.homepage
})

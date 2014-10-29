/**
 * Created by 烬云 on 2014/10/21.
 */
module.exports = {
    options: {
        //生成一个banner注释并插入到输出文件的顶部
        banner: '/*! <%= package.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    generated: {
        files: {
            'angular-echarts.min.js': ['angualr-echarts.js']
        }
    }
};

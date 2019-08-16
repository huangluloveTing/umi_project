# mock的使用

## 安装 
## 语法规范
> Mock.js 的语法规范包括两部分：
> - 数据模板定义规范（Data Template Definition，DTD）
> - 数据占位符定义规范（Data Placeholder Definition，DPD）
* 数据模板定义规范DTD
    #### 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
    ```
    // 属性名   name
    // 生成规则 rule
    // 属性值   value
    'name|rule': value

    注意：

    属性名 和 生成规则 之间用竖线 | 分隔。
    生成规则 是可选的。
    生成规则 有 7 种格式：
    'name|min-max': value
    'name|count': value
    'name|min-max.dmin-dmax': value
    'name|min-max.dcount': value
    'name|count.dmin-dmax': value
    'name|count.dcount': value
    'name|+step': value
    生成规则 的 含义 需要依赖 属性值的类型 才能确定。
    属性值 中可以含有 @占位符。
    属性值 还指定了最终值的初始值和类型。

    ```
* 生产规则和示例

    ### 1、属性值是字符串String
    1) ```'name|min-max': string```
    通过重复string生成一个字符串，重复次数大于等于 min，小于等于 max
    2) ```'name|count': string``` 通过重复string生成一个字符串，重复次数等于count

## umi项目如果要更改 输出的文件的文件名称，可以在配置文件中配置
    ```
    // ref: https://umijs.org/config/
    export default {
    treeShaking: true,
    chainWebpack: function (config, { webpack }) {
        config.merge({
        output:{ // 配置filename和chunkFilename的名称
            filename:'[name].[chunkhash:8].js',
            chunkFilename:'[name].[chunkhash:8].js'
        },
        optimization: {
            minimize: true,
            splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 3,
            automaticNameDelimiter: '.',
            cacheGroups: {
                vendor: {
                name: 'vendors',
                test({ resource }) {
                    return /[\\/]node_modules[\\/]/.test(resource);
                },
                priority: 10,
                },
            },
            },
        }
        });
    },
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'umi_project',
        dll: true,
        routes: {
            exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
            ],
        },
        }],
    ],
    }

    ```
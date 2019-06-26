module.exports={
    configureWebpack:{
        devServer:{
            port:8090,
            open:true,
            before(app){
                let userpool=[
                  {username:'taosm',password:'123456'},
                  {username:'cc',password:'123456'}
                ]
                
                app.get('/api/register',(req,res)=>{
                  const {username,password}=req.query
                  const userlength = userpool.filter(v=>v.username==username).length
                  console.log('userlength:'+userlength)
                  if(userlength>0){
                    res.json({
                      success:false,
                      message:'用户名已存在,注册失败!'
                    })
                  }
                  else{
                    res.json({
                      success:true,
                      message:'注册成功!'
                    })
                  }
                })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}

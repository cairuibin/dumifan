const fs = require('fs');
const path = require('path')
const targetReaddir=process.argv[2]
function template(iconName, IconContent) {
	return (
`export const  ${`Icon${iconName}`}= (props)=>{
  const {w,h}=props
	return (${IconContent})
 }
`)
}
fs.readdir(path.join(__dirname, targetReaddir), (err, files) => {
	if (err) {
		console.log(err);
    process.exit()
	} else {
    //文件数组
		files.forEach((x) => {
			fs.readFile(path.join(targetReaddir, x,), (error, data) => {
        if(error){
           console.log(error)
           process.exit()
        }
				const iconName = x.split('.').shift()

				const IconContent = data.toString().replace(/width=(['\"]).*\1/, 'width={w} height={h}')
				fs.appendFile('./src/Icon/svg/index.js',
					template(iconName, IconContent)
					, (e, s) => {
            if(e){
              console.log(s)
              process.exit()
            }
					})
			})
		})


	}
})

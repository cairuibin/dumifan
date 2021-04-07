const fs = require('fs');
const path = require('path');
const targetReaddir = process.argv[2];
function template(iconName, IconContent) {
  return `export const  ${`Icon${iconName}`}= (props)=>{
  const {w,h}=props
	return (${IconContent.replace('clip-rule', 'clipRule')
    .replace('fill-rule', 'fillRule')
    .replace('stroke-linecap', 'strokeLinecap')
    .replace('clip-path', 'clipPath')})
 }
`;
}
//旧的图标组件的名字 数组
let OldIconNameArr = [];
//读取旧的组件文件  防止有重复的名字
fs.readFile('./src/Icon/svg/IconName.json', (jsonre, jsonfile) => {
  if (jsonre) {
    console.log(`<============读取旧的json文件失败${jsonre}==============>`);
    process.exit(1);
  }
  //读取所有的名字的数组
  OldIconNameArr = JSON.parse(jsonfile.toString());

  fs.readdir(path.join(__dirname, targetReaddir), (err, files) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      //将要添加的文件夹下的文件的数组
      files.forEach(x => {
        console.log(x);
        //获取文件后缀，只要svg文件
        const surfix = path.extname(path.join(targetReaddir, x));
        if (surfix === '.svg') {
          fs.readFile(path.join(targetReaddir, x), (error, data) => {
            if (error) {
              console.log(error);
              return process.exit(1);
            }
            const pattern = /^\w+$/i;
            const iconName = x.split('.').shift();
            const matchResult = iconName.match(pattern);

            if (!matchResult) {
              console.log(
                `<=============${x}命名不符合规范===================>`,
              );
              return process.exit(1);
            }

            if (OldIconNameArr.includes(iconName)) {
              console.log(`<=============${x}文件已经存在===================>`);
              return process.exit(1);
            } else {
              const IconContent = data
                .toString()
                .replace(
                  /[ \t]*width[ \t]*=[ \t]*("[^"]+")|('[^']+')/i,
                  ` width={w}`,
                )
                .replace(
                  /[ \t]*height[ \t]*=[ \t]*("[^"]+")|('[^']+')/i,
                  ` height={h}`,
                );
              fs.appendFile(
                './src/Icon/index.tsx',
                template(iconName, IconContent),
                (e, s) => {
                  if (e) {
                    return process.exit(1);
                  }
                  OldIconNameArr.push(iconName);
                  fs.writeFile(
                    './src/Icon/svg/IconName.json',
                    JSON.stringify(OldIconNameArr),
                    writeerr => {
                      console.log('1111');
                      if (writeerr) {
                        console.log(
                          `<=============文件写入错误${writeerr}===================>`,
                        );
                        return process.exit(1);
                      }
                      fs.unlink(path.join(targetReaddir, x), unlinkerr => {
                        if (unlinkerr) {
                          console.log(unlinkerr);
                        } else {
                          console.log('删除成功');
                        }
                      });
                    },
                  );
                },
              );
            }
          });
        } else {
          console.log('<==================>不是svg文件===================>');
        }
      });
    }
  });
});

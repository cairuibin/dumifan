const fs = require('fs');
const { type } = require('os');
const path = require('path');
const targetReaddir = process.argv[2];
function template(iconName, IconContent) {
  return `export const  ${`Icon${iconName}`}= (props)=>{
  const {w,h}=props
	return (${IconContent})
 }
`;
}
//旧的图标组件的名字 数组
let OldIconNameArr = [];
//读取旧的组件文件  防止有重复的名字
fs.readFile('./src/Icon/svg/IconName.json', (jsonre, jsonfile) => {
  if (jsonre) {
    console.log(err);
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
        console.log(path.extname(path.join(targetReaddir, x)));
        const surfix = path.extname(path.join(targetReaddir, x));
        if (surfix === '.svg') {
          fs.readFile(path.join(targetReaddir, x), (error, data) => {
            if (error) {
              console.log(error);
              return process.exit(1);
            }
            const iconName = x.split('.').shift();

            if (OldIconNameArr.includes(iconName)) {
              console.log(`===>${x}文件已经存在`);
              return process.exit(1);
            } else {
              const IconContent = data
                .toString()
                .replace(/width=(['\"]).*\1/, 'width={w} height={h}');
              fs.appendFile(
                './src/Icon/svg/index.js',
                template(iconName, IconContent),
                (e, s) => {
                  if (e) {
                    return process.exit(1);
                  }
                  OldIconNameArr.push(iconName);
                  fs.writeFile(
                    './src/Icon/svg/IconName.json',
                    JSON.stringify(OldIconNameArr),
                    (writeerr, writedata) => {
                      console.log('1111');
                      fs.unlink(
                        path.join(targetReaddir, x),
                        (unlinkerr, unlinkdata) => {
                          if (unlinkerr) {
                            console.log(unlinkerr);
                          } else {
                            console.log('删除成功');
                          }
                        },
                      );
                    },
                  );
                },
              );
            }
          });
        } else {
          console.log('====不是svg文件');
        }
      });
    }
  });
});

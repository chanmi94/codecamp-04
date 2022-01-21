// import ImgCrop from "antd-img-crop";
// import { Upload } from "antd";

// const Demo = () => (
//   <>
//     <ImgCrop>
//       <Upload>+ Add image</Upload>
//     </ImgCrop>
//     <br />
//     <h3>Current State Log</h3>
//     <pre>{JSON.stringify(Upload)}</pre>
//   </>
// );

// export default Demo;

// import React, { useState } from "react";
// function ImageUploadExample() {
//   //파일 미리볼 url을 저장해줄 state
//   const [fileImage, setFileImage] = useState("");
//   // 파일 저장
//   const saveFileImage = (e) => {
//     setFileImage(URL.createObjectURL(e.target.files[0]));
//   };
//   // 파일 삭제
//   const deleteFileImage = () => {
//     URL.revokeObjectURL(fileImage);
//     setFileImage("");
//   };
//   return (
//     <>
//       {" "}
//       <h1>이미지 미리보기</h1>
//       <table>
//         {" "}
//         <tbody>
//           {" "}
//           <tr>
//             {" "}
//             <th>이미지</th>{" "}
//             <td>
//               {" "}
//               <div>
//                 {" "}
//                 {fileImage && (
//                   <img
//                     alt="sample"
//                     src={fileImage}
//                     style={{ margin: "auto" }}
//                   />
//                 )}{" "}
//                 <div style={{ alignItems: "center", justifyContent: "center" }}>
//                   {" "}
//                   <input
//                     multiple
//                     name="imgUpload"
//                     type="file"
//                     accept="image/*"
//                     onChange={saveFileImage}
//                   />{" "}
//                   <button
//                     style={{
//                       backgroundColor: "gray",
//                       color: "white",
//                       width: "55px",
//                       height: "40px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => deleteFileImage()}
//                   >
//                     {" "}
//                     삭제{" "}
//                   </button>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </td>{" "}
//           </tr>{" "}
//         </tbody>{" "}
//       </table>{" "}
//     </>
//   );
// }
// export default ImageUploadExample;
function ImageUploadExample() {
  const handleImageUpload = (e) => {
    const fileArr = e.target.files;

    let fileURLs = [];

    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        type="file"
        multiple
        accept="image/jpg,image/png,image/jpeg,image/gif"
        onChange={handleImageUpload}
      />
    </>
  );
}
export default ImageUploadExample;

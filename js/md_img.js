function init_image_width_selector() {
    var pat = new RegExp("#width-([^#^ ]+)");
    for (elem of document.querySelectorAll("img[src*=\"#width-\"]")) {
        var width = pat.exec(elem.src)[1];
        console.log("markdown 图片调整测试")
        console.log(elem, elem.src, width);
        elem.style.width = width;
    };
}
window.onload = function() {
    init_image_width_selector();
}

// markdown 中引用
// <script src="//cdn.jsdelivr.net/gh/taotie6/sampleJSON@main/js/md_img.js"></script>
// 可以在src中添加多个“#”标签，“width-”后面直接像css那样填写尺寸即可
// ![myimage](http://localhost/myimage.jpg#width-20%#flag) <!-- 20% -->
// ![myimage](http://localhost/myimage.jpg#width-100px#flag) <!-- 100px -->

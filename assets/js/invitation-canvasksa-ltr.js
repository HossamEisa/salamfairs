var your_name = "";
var your_h_name = "";
var your_text = "In publishing and graphic design commonly used to demonstrate\n" + "the visual form of a document or a typeface without ";

var date = new Date();
var fullDate = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin = "anonymous";
var pos_y = 0;

var total = document.getElementById('total');

window.addEventListener('load', DrawPlaceholder)

function DrawPlaceholder() {
    setDefaultText();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, canvas.width, canvas.height);

        DrawOverlay(img);
        DrawText();
        DynamicText(img);
        DrawHName();
        DrawName();
        DrawDate();
    };
    img.src = '../../assets/img/invitation-ksa.webp';
}

function setDefaultText() {
    document.getElementById("text").value = your_text;
    total.innerText = your_text.length + "/150";
}

function DrawOverlay(img) {
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = 'rgba(30, 144, 255, 0)';
    ctx.fillRect(0, 1080, canvas.width, canvas.height);
}

function DynamicText(img) {
    document.getElementById('text').addEventListener('keyup', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        your_text = this.value;
        total.innerText = your_text.length + "/150";
        DrawOverlay(img);
        DrawHName();
        DrawText();
        DrawName();
        DrawDate();
    });
}

function DrawText() {
    ctx.fillStyle = 'rgba(238,238,238,0.95)';
    ctx.textBaseline = 'middle';
    ctx.font = "30px 'DINNextLTArabic-Regular'";

    var lines = your_text.split("\n");
    ctx.textAlign = "left";
    for (var i = 0; i < lines.length; i++) {
        var y = your_h_name === '' ? 385 : 450

        if (lines.length == 1) {
            pos_y = y + i * 40;
        } else if (lines.length == 2) {
            pos_y = y + i * 40
        } else {
            pos_y = y + i * 40;
        }
        ctx.fillText(lines[i], 20, pos_y);
    }
}

function DrawHName() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.textBaseline = 'middle';
    ctx.font = "35px 'DINNextLTArabic-BOLD'";
    ctx.textAlign = "left";
    ctx.fillText(your_h_name, 20, 395);
}

function DrawName() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.textBaseline = 'middle';
    ctx.font = "23px 'DDINNextLTArabicIN-LIGHT'";
    ctx.textAlign = "left";

    if (your_name != '') {
        ctx.fillText(your_name, 30, (pos_y + 60));
    }

}

function DrawDate() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.textBaseline = 'middle';
    ctx.font = "23px 'DINNextLTArabic-LIGHT'";
    ctx.textAlign = "left";
    ctx.fillText(fullDate, 30, (pos_y + 90));
}

document.getElementById('h-name').addEventListener('keyup', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    your_h_name = "أدعوك " + this.value;
    DrawOverlay(img);
    DrawHName();
    DrawText();
    DrawName();
    DrawDate();
});

document.getElementById('name').addEventListener('keyup', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    your_name = this.value;
    DrawOverlay(img);
    DrawHName();
    DrawText();
    DrawName();
    DrawDate();
});


function share_whatsapp(msg) {
    let link_whatsapp = document.createElement('a');
    link_whatsapp.href = "https://wa.me/?text=" + msg;
    link_whatsapp.click();
}

function share_twitter(msg, uid) {
    let link_twitter = document.createElement('a');
    link_twitter.href = "https://twitter.com/intent/tweet?text=" + msg + "&hashtags=السيرة_كأنك_تراها&url=https://invitation.salamfairs.com.sa/" + uid.trim();
    link_twitter.click();
}

function download_image() {
    let link = document.createElement('a');
    link.download = your_name + ".jpg";
    link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    link.click();
}

$('.download-image').on('click', function () {
    let selectedBtn = this.getAttribute("data-btn-name");
    console.log("BTN: " + selectedBtn);

    if (your_name === '') {
        alert("يجب كتابة اسمك");
    } else if (your_text === '') {
        alert("يجب كتابة تجربتك المميزة في زيارة المتحف الدولي للسيرة النبوية");
    } else if (your_name.length < 2 || your_name.length > 35) {
        alert("يجب أن يكون الاسم بين ٢ لـ ٣٥ حرف فقط");
    } else if (your_h_name.length != 0 && (your_h_name.length < 2 || your_h_name.length > 40)) {
        alert("يجب أن يكون (اسم من ترغب في دعوته) بين ٢ لـ ٤٠ حرف فقط");
    } else if (your_text.length < 6 || your_text.length > 150) {
        alert("يجب أن تكون الكلمة بين ٦ لـ ١٥٠ حرف فقط");
    } else {
        /*$(document).bind("contextmenu",function(e){
         return false;
         });*/

        // $.blockUI.defaults.css = {
        //     padding: 0,
        //     margin: 0,
        //     width: '30%',
        //     top: '20%',
        //     left: '35%',
        //     textAlign: 'center',
        //     cursor: 'wait'
        // };

        // unblock when ajax activity stops
        // $(document).ajaxStop($.unblockUI);

        // $.blockUI({message: '<img src="../../assets/img/load.svg" />', overlayCSS: {backgroundColor: '#0e9c8c'}});

        var dataURL = canvas.toDataURL("image/jpeg");

        var a = document.createElement("a"); //Create <a>
        a.href = dataURL //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
        document.body.removeChild(a);

        // $.ajax({
        //     method: "POST",
        //     dataType: "json",
        //     url: "../save_inv.php",
        //     data: {
        //         secret_key: 'ISMAIL@84#Shabbir#SALAMFAIRS',
        //         from: your_name,
        //         to: your_h_name,
        //         msg: your_text,
        //         imgBase64: dataURL
        //     },
        //     success: function(res){
        //         if(res.status == 'success') {
        //             tata.success('نجاح!', res.msg, {
        //                 position: 'tl',
        //                 duration: 3000,
        //                 animate: 'slide',
        //                 closeBtn: false
        //             });
        //
        //             let line1 = "تمت دعوتكم لزيارة المتحف الدولي للسيرة النبوية بالمدينة المنورة";
        //             let line2 = "يمكنكم مشاهدة وتحميل البطاقة عبر زيارة الرابط التالي:";
        //             let line3 ="ولمعرفة أروع سيرة يمكنكم حجز تذاكر الزيارة عبر الموقع الإلكتروني:";
        //             let uid = res.uid;
        //             let encode_url = encodeURIComponent("https://invitation.salamfairs.com.sa/" + uid);
        //             let encode_url_ticket = encodeURIComponent("https://tickets.salamfairs.com.sa");
        //             let new_line = "%0A";
        //
        //             console.log("BTN: " + selectedBtn);
        //
        //             if(selectedBtn === "whatsapp") {
        //                 let msg_whatsapp = line1 + " " + new_line + " " + new_line + " *" + line2 + "* " + new_line + encode_url.trim() + " " + new_line + " " + new_line + " *" + line3 + "* " + new_line + encode_url_ticket.trim();
        //                 share_whatsapp(msg_whatsapp)
        //             }
        //             else if(selectedBtn === "twitter") {
        //                 let msg_twitter = line1 + new_line + new_line + line2 +  new_line + encode_url +  new_line +  new_line + line3 +  new_line + encode_url_ticket + new_line + new_line;
        //                 share_twitter(msg_twitter, uid);
        //             }
        //             else if(selectedBtn === "download") {
        //                 download_image();
        //             }
        //         }
        //         else {
        //             console.log(res.msg);
        //             tata.error('خطأ', res.msg, {
        //                 position: 'tl',
        //                 duration: 3000,
        //                 animate: 'slide',
        //                 closeBtn: false
        //             });
        //         }
        //     },
        //     error: function (res) {
        //         console.log(res);
        //     }
        // });
    }
});


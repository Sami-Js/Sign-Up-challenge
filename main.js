// انشاء كلاس للمدخلات لان قيمها متشابهه
class Inputs {
    constructor(id , msg ) {
        this.id = document.getElementById(id) ;
        this.msg = msg ;
    }
}

// دوال ثابته لتاخذ القيم وتخرجها
class Fun {
    // دالة ادخال الكلاس
    static addClass(val , nameClass) {
        // حفظ اب المدخل في متغير لكي تسهل اضافة الكلاس 
        let paranetInput = val.id.parentElement ;
        paranetInput.className = 'inp';
        // حفظ الابن الذي ندخل فيه الرسالة
        let childMsg = paranetInput.children[2];
        paranetInput.classList.add(nameClass);
        nameClass === 'failed' ? childMsg.innerHTML = val.msg : childMsg.innerHTML = '';
    }

    // دالة اعادة تعيين القيمة للمدخلات وارجاع كلاس الأب للافتراضي لكي يحذف الكلاسات المضافه 
    static removeValue(arrValues) {
        arrValues.forEach((e) => {
        let paranetInput = e.id.parentElement ;
        e.id.value = '';
        paranetInput.className = 'inp';
        paranetInput.children[2].innerHTML = '' ;
        });
    }    
}

// الضغط والتأكد من القيم
function generateValue() {

    const name = new Inputs('name', 'Please enter a valid name');
    const email = new Inputs('email', 'Please enter a valid email Address');
    const password = new Inputs('password', 'Please enter a valid Password');
    
    // مصفوفة من المدخلات لتسهيل الوصول للقيم
    const ArrayInputs = [name , email , password ];
    // شرط اذا تم ادخال قيم في كل المدخلات يتم ارجاع الكلاس الافتراضي لكي لا يتواجد اي من الكلاسات المضافه
    if(name.id.value && email.id.value  && password.id.value ){
      Fun.removeValue(ArrayInputs);
      return ;
     }

     // شرط التحقق من قيم المدخلات
    ArrayInputs.forEach((element) => {
     !element.id.value ? Fun.addClass( element , 'failed'):Fun.addClass( element , 'success')
    });

}



document.querySelector('#sign-up').addEventListener('click' , generateValue);

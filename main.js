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
        // حفظ الابن الذي ندخل فيه الرسالة
        let childMsg = paranetInput.children[2];
        paranetInput.classList.add(nameClass);
        if(nameClass === 'failed')
         childMsg.innerHTML = val.msg ;
         else
         childMsg.innerHTML = '';
    }

    // دالة اعادة تعيين القيمة  للحقول والكلاس للاب
    static removeValue(arrValues) {
        arrValues.forEach((e) => {
        let paranetInput = e.id.parentElement ;
        e.id.value = '';
        paranetInput.className = 'inp';
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
    // شرط اذا تم ادخال قيم في كل المدخلات يتم تعيين الكلاس الرئيسي لكي لا يتواجد اي من الكلاسات المضافه
    if(name.id.value && email.id.value  && password.id.value ){
      Fun.removeValue(ArrayInputs);
      return ;
     }


    ArrayInputs.forEach((element) => {
    if(!element.id.value)
    Fun.addClass( element , 'failed');
    else
    Fun.addClass( element , 'success');
    });

}



document.querySelector('#sign-up').addEventListener('click' , generateValue);



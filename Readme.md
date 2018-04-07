 # naoto243-datepicker-modal

```
yarn add git+https://github.com/naoto243/naoto243-datepicker-modal#master 
```


```jsx

const pdom : any = document.getElementById("modal-root");
const birthDate = new Date();
const moment = require("moment");
 ...
 
   <Naoto243DatePickerModal
     date={birthDate}
     portalDOM={pdom}
     form={({ open }) => (
       <input
         type="text"
         name="birth_date"
         value={moment(fbirthDate).format('YYYY/MM/DD') }
         onClick={open}
       />
     )}
     onChange={date => {
      ...
     }}
   />

```


![image](https://user-images.githubusercontent.com/1452731/38459296-e7cdab9c-3ae2-11e8-8251-6406b613424d.png)


```
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
```
// Create a custom hook to use in your components
export const useFormRules = () => {
    return {
        ruleRequired: (value: string) => !!value || 'กรุณากรอกข้อมูลในช่องนี้',
        ruleEmail: (value: string) => {
            const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "กรุณาใส่อีเมล์ที่ถูกต้อง";
        },
        rulePassLen: (v: string) => (!!v && v.length >= 6) || "ควรมีอักษรอย่างน้อย 6 ตัว",
    }
}
import java.util.*;
public class Hello {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        do {
            System.out.println("Enter the password (at least 8 characters with 2 alphabets and 2 numbers):");
            String s = sc.nextLine();

            if (s.length() >= 8 && check(s)) {
                System.out.println("Valid Password");
                break; // Exit the loop if the password is valid
            } else {
                System.out.println("Invalid password. Please try again.");
            }
        } while (true);

        sc.close();
        
    }
    public static boolean check(String str){
       int num =0, ch = 0;
        for (int i=0 ; i<str.length();i++){
            char cha = str.charAt(i);
            if(isChar(cha)){
                ch++;
            }
            else if(isDigit(cha)){
                num++;
            }
            else{
                continue;
            }
        }
        if(num >=2 && ch>=2){
            return true;
        }
        return false;
    }

    public static boolean isChar(char a){
        if(a>='a' && a<='z' || a>='A' && a<='Z'){
            return true;
        }
        return false;
    }
    public static boolean isDigit(char a){
        if(a>='0' && a<='9'){
            return true;
        }
        return false;   
    }
}

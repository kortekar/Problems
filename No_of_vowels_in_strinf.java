import java.util.*;
public class Hello {
    public static void main(String[] args) {
        String str;
        int count=0;
        Scanner sc = new Scanner(System.in);
        str = sc.nextLine();
        for(int i=0;i<str.length();i++){
            if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
                count++;
            }
        }
        System.out.println(count);

    }
}

import java.util.*;
public class Hello {
    public static void main(String[] args) {
        String str;
        int count=0;
        Scanner sc = new Scanner(System.in);
        str = sc.nextLine();
        String[] words = str.split("\\s+");
        count = words.length;
        System.out.println(count);
        for (int i = 0; i < count; i++) {
            System.out.print(words[i]+",");
        }
        sc.close();
    }
}

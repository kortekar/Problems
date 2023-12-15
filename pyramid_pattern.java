/* 
     *
    ***
   *****
  *******
 *********
 
*/
import java.util.*;
public class Hello {
    public static void main(String[] args) {
        int a = 5;
        for(int i=a;i>0;i--)
        {
            for(int j=0;j<i;j++)
            {
                System.out.print(" ");
            }
            for(int j=i;j<=5;j++)
            {
                System.out.print("*");
            }
            for(int j=i+1;j<=5;j++)
            {
                System.out.print("*");
            }
            System.out.println();
            
        }
    }
}

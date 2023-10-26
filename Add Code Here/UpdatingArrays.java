import java.util.Arrays;

public class UpdatingArrays {
    public static void main(String[] arg){
            String[] menu = {"Espresso", "iced cofee", "Macchiato"};
            
             menu[1] = "cappacino";
             menu[1] = "iced coffee";
   
           System.out.println(Arrays.toString(menu));
    }
}

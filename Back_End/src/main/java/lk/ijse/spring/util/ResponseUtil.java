package lk.ijse.spring.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ResponseUtil {
    private int code;
    private String massage;
    private Object data;

    public ResponseUtil(int code, String massage, Object data) {
        this.code = code;
        this.massage = massage;
        this.data = data;
    }
}

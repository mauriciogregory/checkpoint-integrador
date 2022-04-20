import { useEffect, useState } from "react";
import api from "../service/api";

export function DeleteHook(id) {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        api.delete(`/products/${id}`).then(() => setStatus('Deletado!'));
    }, []);

    return(
        <div>
            Status: {status}
        </div>
    )
}
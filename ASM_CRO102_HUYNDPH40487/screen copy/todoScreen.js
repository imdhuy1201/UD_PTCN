import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchTodos,
  addTodoToAPI,
  deleteTodoFromAPI,
} from "../actions/todoAction";
import { Alert, Button, ScrollView, Text, TextInput, View } from "react-native";

const TodoScreen = () => {
  // Khai báo các state để thực hiện thêm
  const [title, setTitle] = useState("");
  // Lấy danh sách dữ liệu từ store của redux
  const listTodo = useSelector((state) => state.listTodoStore.listTodo);
  // Lấy đối tượng để điều khiển các action
  const dispatch = useDispatch();

  // Hàm xử lý việc thêm
  const handleAddTodo = () => {
    let newTodo = { id: Math.random().toString(), title: title };
    dispatch(addTodoToAPI(newTodo));
  };

  // Hàm xử lý việc xóa
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoFromAPI(id))
      .unwrap()
      .then(() => {
        Alert.alert("Xóa thành công");
      })
      .catch((error) => {
        Alert.alert("Lỗi", "Không thể xóa mục này");
      });
  };

  // Khi vào ứng dụng sẽ gọi action fetchTodos để kéo dữ liệu từ API về store của redux
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TextInput 
          placeholder="Thêm những lời biết ơn trong ngày"
          onChangeText={setTitle}
          style={{ marginBottom: 20, borderColor:'pink', borderWidth:1, margin:10,padding:10,flex:1 }}
        />
        <View style={{ width: 100 }}>
          <Button title="Thêm" onPress={handleAddTodo} />
        </View>
        {/* In danh sách todo: */}
        {listTodo.map((row) => (
          <View 
            key={row.id}
            style={{
              margin: 10,
              padding: 10,
              borderColor: "blue",
              borderWidth: 1,
              width:"90%",
              borderRadius:6
            }}
          >
            <Text>
              {row.title}
            </Text>
            <Button title="Xóa" onPress={() => handleDeleteTodo(row.id)} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TodoScreen;

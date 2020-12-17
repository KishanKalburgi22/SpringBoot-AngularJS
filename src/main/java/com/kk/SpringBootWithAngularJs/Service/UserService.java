package com.kk.SpringBootWithAngularJs.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kk.SpringBootWithAngularJs.Model.User;

@Service
public class UserService {

	private List<User> users = new ArrayList<>(
			Arrays.asList(new User(1, "Ram", "Ramayan Character"), new User(2, "Arjun", "Mahabharat Character")));

	public List<User> getUsers() {
		return users;
	}

	public User getUserById(int id) {
		return users.stream().filter(u -> u.getId() == id).findFirst().get();
	}

	public void addUser(User user) {
		users.add(user);
	}

	public void updateUser(User user) {
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getId() == user.getId()) {
				users.remove(i);
				users.add(i, user);
				break;
			}
		}

	}

	public void deleteUser(int id) {
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getId() == id) {
				users.remove(i);
				break;
			}
		}

	}

}

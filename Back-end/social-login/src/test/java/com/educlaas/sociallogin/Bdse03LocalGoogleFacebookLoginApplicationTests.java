package com.educlaas.sociallogin;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.educlaas.sociallogin.dao.AuthProvider;
import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.payload.AfterRegister;
import com.educlaas.sociallogin.repository.UsersRepository;

@SpringBootTest
class Bdse03LocalGoogleFacebookLoginApplicationTests {
	
	@Autowired
	private UsersRepository usersRepository;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;   
	
	@Autowired
	private AfterRegister afterregister;  
	
	
	@Test 
	void registerUser() {
		
		Users users = new Users();
		users.setUserName("harry");
		users.setEmail("harry@gmail.com");
		users.setPassword("12345");
		users.setProvider(AuthProvider.local);
		
		//Encode Password
		users.setPassword(passwordEncoder.encode(users.getPassword()));
		
		//Save new user in the database
		Users newUser = usersRepository.save(users);
		
		Mockito.when(usersRepository.save(users)).thenReturn(users);
		
		String message = "user added successfully"
;		String response = afterregister.regUser(message);
		Assert.assertEquals(response, "user added successfully");
		
		
	}
	
//	@Test
//	void loginUser() {
//		
//		List<users> stores = new ArrayList<>();
//		
//		Stores store = new Stores();
//		store.setStorename("krishna Sweets");
//		store.setStoreaddress("Backingum street London");
//		store.setStoretype("Sweets");
//		
//		stores.add(store);
//		Mockito.when(storeRepository.findAll()).thenReturn(stores);
//
//		List<Stores> viewStore = storeService.getAllStores();
//		
//		Assert.assertEquals(1, viewStore.size());
//		
//	}

}

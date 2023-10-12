import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default function B2() {
  return (
    <View style={styles.container}>
      <View style={[styles.flexHorizontal, { width: '100%' }]}>
        <Image
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productTitle}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <Text style={styles.boldText}>Cực kỳ hài lòng</Text>
      <View
        style={[
          styles.flexHorizontal,
          {
            height: '5%',
            width: '100%',
          },
        ]}
      >
        <Pressable style={{ aspectRatio: 1 }}>
          <Image
            style={{ aspectRatio: 1 }}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={{ aspectRatio: 1 }}>
          <Image
            style={{ aspectRatio: 1 }}
            resizeMode="contain"
      
          />
        </Pressable>
        <Pressable style={{ aspectRatio: 1 }}>
          <Image
            style={{ aspectRatio: 1 }}
            resizeMode="contain"
            
          />
        </Pressable>
        <Pressable style={{ aspectRatio: 1 }}>
          <Image
            style={{ aspectRatio: 1 }}
            resizeMode="contain"
            
          />
        </Pressable>
        <Pressable style={{ aspectRatio: 1 }}>
          <Image
            style={{ aspectRatio: 1 }}
            resizeMode="contain"
          
          />
        </Pressable>
      </View>

      <Pressable
        style={{
          padding: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#1511EB',
          borderRadius: 5,
          columnGap: '5%',
          width: '100%',
        }}
      >
        <Image
          style={{ aspectRatio: 39 / 32, height: '100%' }}
          resizeMode="center"
          
        />
        <Text style={styles.boldText}>Thêm hình ảnh</Text>
      </Pressable>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#C4C4C4',
          borderRadius: 5,
          flex: 0.6,
          width: '100%',
          fontSize: 18,
          padding: '5%',
        }}
        placeholderTextColor="#C4C4C4"
        multiline={true}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
      />
      <Pressable
        style={{
          backgroundColor: '#0D5DB6',
          padding: '5%',
          width: '100%',
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Gửi
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  productImage: {
    aspectRatio: 1,
    flexBasis: 0,
    flexGrow: 0.25,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    flexBasis: 1,
    flexGrow: 1,
  },
  flexHorizontal: {
    flexDirection: 'row',
    columnGap: '5%',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

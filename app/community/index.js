import { ScrollView, View } from 'react-native';
import { COLORS } from '@constants/theme';
import { Header } from '@components/common/Header/Header';
import { communityData } from '@mocks/community';
import { Post } from '@components/Post/Post';

const Community = () => {
    return (
        <View
            style={{
                backgroundColor: COLORS.bgColor,
                flex: 1,
            }}
        >
            <Header title={'Community'} />
            <ScrollView style={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
                <View
                    style={{
                        gap: 8,
                    }}
                >
                    {communityData.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Community;

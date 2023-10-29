# Group Anagrams: Anagrams are words formed by rearranging the letters of another word, For example, car and arc, cat and act, etc.
from collections import defaultdict
def group_anagrams(a):
  dfdict = defaultdict(list)
  for i in a:
    sorted_i = " ".join(sorted(i))
    dfdict[sorted_i].append(i)
  return dfdict.values()
words = ["tea", "eat", "bat", "ate", "arc", "car"]
# words = ["pin", "nip", "ant", "tan", "abc", "cab"]
print(group_anagrams(words))